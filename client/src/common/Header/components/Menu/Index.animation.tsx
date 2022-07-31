// Framer motion animation variants
export const menuAnimation = {
    opened: {
        y: 0,
        transition: {
        ease: "easeInOut",
        duration: 0.5,
        delayChildren: 0.5
        }
    },
    closed: {
        y: "-100%",
        transition: {
        ease: "circOut",
        when: "afterChildren",
        duration: 0.5,
        }
    }
}

export const menuUniversitiesAnimation = {
    opened: {
        y: 0,
        opacity: 1,
        transition: {
        ease: "easeInOut",
        duration: 0.5,
        delayChildren: 0.35
        }
    },
    closed: {
        y: "100%",
        opacity: 0,
        transition: {
        ease: "circOut",
        when: "afterChildren",
        duration: 0.5,
        }
    }
}

export const menuUniversitiesChildrenAnimation = {
    opened: {
        y: 0,
        opacity: 1,
        transition: {
        ease: "easeInOut",
        duration: 0.5,
        }
    },
    closed: {
        y: "100%",
        opacity: 0,
        transition: {
        ease: "circOut",
        duration: 0.5,
        }
    }
}

export const menuActionsAnimation = {
    opened: {
        transition: {
        ease: "easeInOut",
        staggerChildren: 0.2,
        }
    },
    closed: {
        transition: {
        ease: "circOut",
        when: "afterChildren",
        staggerChildren: 0.1
        }
    }
}

export const menuActionsBorderAnimation = {
    opened: {
        height: "100%",
        transition: {
        ease: "easeInOut",
        duration: 0.5,
        }
    },
    closed: {
        height: 0,
        transition: {
        ease: "circOut",
        duration: 0.25,
        }
    }
}

export const menuActionsContentAnimation = {
    opened: {
        y: 0,
        opacity: 1,
        transition: {
        ease: "easeInOut",
        duration: 0.5,
        staggerChildren: 0.25
        }
    },
    closed: {
        y: "100%",
        opacity: 0,
        transition: {
        ease: "circOut",
        duration: 0.25,
        }
    }
}

export const menuActionsContentChildrenAnimation = {
    opened: {
        opacity: 1,
        transition: {
        ease: "easeInOut",
        duration: 0.5,
        }
    },
    closed: {
        opacity: 0,
        transition: {
        ease: "circOut",
        duration: 0.25,
        }
    }
}