const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchData = async () => {
    await timeout(500);
    return { name: "A".repeat(15 * Math.random() + 1) };
};
