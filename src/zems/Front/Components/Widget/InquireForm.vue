<template>
  <div class="inquire-form-wrapper">
    <form @submit.prevent="handleSubmit" class="gold-form">
      <!-- Progress Bar -->
      <div class="form-progress">
        <div
          v-for="s in [1, 2, 3]"
          :key="s"
          :class="['step', { active: currentStep === s }]"
        >
          {{ formatStepLabel(s) }}
        </div>
      </div>

      <!-- Step 1: Interest -->
      <Transition name="step-fade" mode="out-in">
        <div v-if="currentStep === 1" class="form-step">
          <h2>I am interested in...</h2>
          <div class="radio-grid">
            <label
              v-for="opt in interestOptions"
              :key="opt.value"
              class="radio-card"
            >
              <input
                type="radio"
                name="interest"
                :value="opt.value"
                v-model="formData.interest"
              />
              <span class="card-border"></span>
              <span class="lbl-main">{{ opt.label }}</span>
              <span class="lbl-sub">{{ opt.sub }}</span>
            </label>
          </div>
          <div class="btn-row right">
            <button type="button" class="next-btn" @click="nextStep">
              Next <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Step 2: Details -->
        <div v-else-if="currentStep === 2" class="form-step">
          <h2>Tell us more...</h2>
          <div class="input-group">
            <label>Budget Range</label>
            <select v-model="formData.budget" class="gold-input">
              <option v-for="b in budgetOptions" :key="b">{{ b }}</option>
            </select>
          </div>
          <div class="input-group">
            <label>Purchase Timeline</label>
            <select v-model="formData.timeline" class="gold-input">
              <option v-for="t in timelineOptions" :key="t">{{ t }}</option>
            </select>
          </div>
          <div class="btn-row spread">
            <button type="button" class="back-btn" @click="prevStep">
              <i class="fa-solid fa-arrow-left"></i> Back
            </button>
            <button type="button" class="next-btn" @click="nextStep">
              Next <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Step 3: Contact -->
        <div v-else-if="currentStep === 3" class="form-step">
          <h2>Your Details</h2>
          <div class="input-group">
            <input
              type="text"
              v-model="formData.name"
              class="gold-input"
              placeholder=" "
              required
            />
            <label class="floating-label">Full Name</label>
          </div>
          <div class="input-group">
            <input
              type="email"
              v-model="formData.email"
              class="gold-input"
              placeholder=" "
              required
            />
            <label class="floating-label">Email Address</label>
          </div>
          <div class="input-group">
            <input
              type="tel"
              v-model="formData.phone"
              class="gold-input"
              placeholder=" "
              required
            />
            <label class="floating-label">Phone Number</label>
          </div>

          <div class="btn-row spread">
            <button type="button" class="back-btn" @click="prevStep">
              <i class="fa-solid fa-arrow-left"></i> Back
            </button>
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="!isSubmitting">{{
                submitted ? "Request Sent ✓" : "Request Private Viewing"
              }}</span>
              <span v-else>Sending...</span>
            </button>
          </div>
        </div>
      </Transition>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const currentStep = ref(1);
const isSubmitting = ref(false);
const submitted = ref(false);

const formData = reactive({
  interest: "1 Bedroom",
  budget: "$2M - $5M",
  timeline: "Immediate",
  name: "",
  email: "",
  phone: "",
});

const interestOptions = [
  { label: "1 Bedroom", value: "1 Bedroom", sub: "Pied-à-terre" },
  { label: "2 Bedroom", value: "2 Bedroom", sub: "Full Residence" },
  { label: "Penthouse", value: "Penthouse", sub: "The Crown Jewel" },
];

const budgetOptions = ["$2M - $5M", "$5M - $10M", "$10M - $25M", "$25M+"];
const timelineOptions = ["Immediate", "3-6 Months", "Investigative"];

const formatStepLabel = (step) => {
  const labels = ["Interest", "Details", "Contact"];
  return `0${step}. ${labels[step - 1]}`;
};

const nextStep = () => {
  if (currentStep.value < 3) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--;
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isSubmitting.value = false;
  submitted.value = true;
};
</script>

<style scoped>
.inquire-form-wrapper {
  width: 100%;
  max-width: 600px;
}

.gold-form h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #fff;
  font-weight: 400;
}

/* Progress Bar */
.form-progress {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
}

.step {
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s;
}

.step.active {
  color: var(--text-gold);
}

/* Radio Cards */
.radio-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
}

.radio-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  transition: 0.3s;
}

.radio-card input {
  position: absolute;
  opacity: 0;
}

.card-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

.radio-card:hover .card-border {
  border-color: #666;
}

.radio-card input:checked ~ .card-border {
  border-color: var(--text-gold);
  background: rgba(197, 160, 89, 0.05);
}

.lbl-main {
  font-size: 1.2rem;
  color: #fff;
  font-family: var(--font-heading);
  margin-bottom: 5px;
}

.lbl-sub {
  font-size: 0.8rem;
  color: #888;
}

/* Inputs */
.input-group {
  position: relative;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 0.8rem;
  color: var(--text-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.gold-input {
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 0;
  color: #fff;
  font-family: var(--font-body);
  font-size: 1.1rem;
  outline: none;
  transition: 0.3s;
  border-radius: 0;
}

.gold-input option {
  background: #0a0a0a;
  color: #fff;
  padding: 10px;
}

.gold-input:focus {
  border-color: var(--text-gold);
}

.floating-label {
  position: absolute;
  top: 15px;
  left: 0;
  color: #666;
  pointer-events: none;
  transition: 0.3s;
  font-size: 1rem;
}

.gold-input:focus ~ .floating-label,
.gold-input:not(:placeholder-shown) ~ .floating-label {
  top: -20px;
  font-size: 0.8rem;
  color: var(--text-gold);
}

/* Buttons */
.btn-row {
  display: flex;
  margin-top: 50px;
}

.btn-row.right {
  justify-content: flex-end;
}

.btn-row.spread {
  justify-content: space-between;
}

.next-btn,
.submit-btn {
  background: none;
  border: 1px solid var(--text-gold);
  color: var(--text-gold);
  padding: 15px 40px;
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
}

.next-btn:hover,
.submit-btn:hover:not(:disabled) {
  background: var(--text-gold);
  color: #000;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.back-btn {
  background: none;
  border: none;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
}

.back-btn:hover {
  color: #fff;
}

/* Transitions */
.step-fade-enter-active,
.step-fade-leave-active {
  transition: all 0.3s ease;
}

.step-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.step-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@media (max-width: 768px) {
  .gold-form h2 {
    font-size: 2rem;
  }
}
</style>
