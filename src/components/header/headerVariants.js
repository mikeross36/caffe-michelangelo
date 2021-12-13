export const logoVariants = {
    initial: {
        opacity: 0,
        y: "-100%"
    },
    withMotion: {
        opacity: 1,
        y: 0,
        transition: {type:"spring", delay: .2}
    }
};

export const titleVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    withMotion: {
        opacity: 1,
        x: 0,
        transition: {type: "spring", delay: .3}
    }
};

export const buttonVariants = {
    initial: {
        opacity: 0,
        y: "100vh"
    },
    withMotion: {
        opacity: 1,
        y: 0,
        transition: {type:"spring", delay: .3}
    }
};