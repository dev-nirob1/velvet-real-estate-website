import { reactive } from 'vue'

export const uiState = reactive({
  isMenuOpen: false,
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
  },
  closeMenu() {
    this.isMenuOpen = false
    document.body.style.overflow = ''
  }
})
