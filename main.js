/**
 * Page vitrine — comportements minimaux, sans dépendance ni ressource distante.
 */

// Numéro commercial WhatsApp (format international, sans « + » ni espaces).
// Laisser vide tant que le numéro n'est pas connu : WhatsApp ouvre alors le
// sélecteur de conversation, et le texte du message reste pré-rempli.
const CONTACT_WHATSAPP_NUMBER = '212708423335'; // Abdellah — responsable commercial

const year = document.querySelector('#year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (CONTACT_WHATSAPP_NUMBER) {
  for (const link of document.querySelectorAll('[data-contact-whatsapp], [data-whatsapp-floating]')) {
    const text = link.getAttribute('href')?.split('text=')[1] ?? '';
    link.setAttribute('href', `https://wa.me/${CONTACT_WHATSAPP_NUMBER}${text ? `?text=${text}` : ''}`);
  }
}
