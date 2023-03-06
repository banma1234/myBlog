export const uploadImage = async (
  files: FileList,
): Promise<{ images: string[]; imageTitle: string[] }> => {
  const images: string[] = [];
  const imageTitle: string[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    imageTitle.push(file.name);

    const base64 = await new Promise<string>((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject(new Error("Error occurred while encoding image file."));
      };
    });

    images.push(base64);
  }

  return { images, imageTitle };
};
