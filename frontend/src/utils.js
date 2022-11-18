export async function fileToBinary (file) {
  let buffer = await file.arrayBuffer()
  return new Uint8Array(buffer)
}

export function imageBinaryToDataURL (binary) {
  let blob = new Blob([binary], {type:"image/png"})
  let urlCreator = window.URL || window.webkitURL;
  return urlCreator.createObjectURL(blob);
}