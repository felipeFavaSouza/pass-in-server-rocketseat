// src/utils/generate-slug.ts
function generateSlug(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "").replace(/\s+/g, "-").replace(/-{2,}/g, "-").trim();
}

export {
  generateSlug
};
