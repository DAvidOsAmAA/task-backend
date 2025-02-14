import joi from 'joi'

export const addTaskValidation = joi.object({
    title:joi.string().required(),

    description:joi.string().allow("").optional(),
})

export const updateTaskValidation= joi.object({

    id:joi.string().hex().length(24).required()

})

export const deleteTaskValidation = joi.object({

    id:joi.string().hex().length(24).required(),
    
})