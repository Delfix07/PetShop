export default function validateProduct(product) {
    const errors = {
        name: "",
        description: "",
        price: "",
        petType: "",
        stock: "",
        category: "",
        brand: "",
        image: ""
    }

    if (product.name.trim().length === 0) {
        errors.name = "This input must contain something"
    }

    if (product.description.trim().length === 0) {
        errors.description = "This input must contain something"
    }

    if (product.price === "" || product.price <= 0) {
        errors.price = "Price must be greater than 0"
    }

    if (product.petType.length === 0) {
        errors.petType = "Select at least one pet type"
    }

    if (product.stock < 0) {
        errors.stock = "Stock cannot be negative"
    }

    if (product.category.trim().length === 0) {
        errors.category = "This input must contain something"
    }

    if (product.brand.trim().length === 0) {
        errors.brand = "This input must contain something"
    }

    if (
        product.image.length === 0 ||
        product.image.some(image => image.trim().length === 0)
    ) {
        errors.image = "At least one image is required"
    }

    return errors
}