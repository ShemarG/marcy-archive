export async function fileToBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export function fileToObjectURL (file) {
  let urlCreator = window.URL || window.webkitURL;
  return urlCreator.createObjectURL(file);
}