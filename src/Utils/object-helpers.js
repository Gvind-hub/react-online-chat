export const updateSubObjectInArray = (items, itemIndex, newObjProps) => {
    return items.map((u, index) => {
        if (index === itemIndex) {
            return {...u, ...newObjProps}
        }
        return u;
    })
};

export const removeSubObjectFromArray = (items, itemIndex) => items.filter((u, index) => index !== itemIndex);