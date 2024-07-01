class apiError extends error {
    constructor(
        statusCode,
        message = 'Something went wrong',
        errors = [],
    ) {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.errors = errors
        this.data = null
        this.success = false

    }
}

export { apiError }