export const getDailyPhoto = async () => {
  try {
    const res = await fetch(process.env.VUE_APP_DAILY_APOD);
    if (!res.ok) {
      throw Error('Problem Getting Nasa Picture of the Day');
    }
    const photoInfo = await res.json();
    return photoInfo
  } catch (error) {
    console.error(error)
  }
}