export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};


// this is a path which we can use in our mutiple sites to import assets from the assets folder