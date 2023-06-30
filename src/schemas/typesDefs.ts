import { gql } from "apollo-server";

const typeDefs = gql`
    type Customers {
        id: String!
        email: String!
        password: String!
        name: String!
        treatment: String
        phone: String
        cpf: String
        birth_date: String
        cro: String
        address_id: Int
        address: Address
        createdAt: String
        updatedAt: String
    }

    type Address {
        id: String!
        address: String!
        number: String!
        zip_code: String!
        state_id: String!
        state: [State!]
        name: String
        contact_number: String
        customers: [Customers!]
        # shipping: [Shipping!]
        createdAt: String
        updatedAt: String
    }

    input CustomerCreateInput {
        email: String!
        password: String!
        name: String!
        treatment: String
        phone: String
        cpf: String
        birth_date: String
        cro: String
        address: [AddressCreateInput!]
    }

    input AddressCreateInput {
        address: String!
        number: String!
        zip_code: String!
        state_id: String!
        state: [State!]
        name: String
        contact_number: String
        customers: [Customers!]
        # shipping: [Shipping!]
    }

    type State {
        id: String!
        title: String!
        address: [Address!]
        createdAt: String
        updatedAt: String
    }

    type Images {
        id: String!
        name: String!
        link: String!
        description: String
        width: Int
        height: Int
        products: [Products]
        ImagesOnProducts: [ImagesOnProducts]
        Categories: [Categories]
        SubCategories: [SubCategories]
        createdAt: String
        updatedAt: String
    }

    type Products {
        id: String!
        title: String!
        sub_description: String
        description: String
        stock: Int!
        images: [Images!]
        sku: String!
        discount: Float
        price: Float!
        product_options_id: Int!
        weight: Float
        active: Boolean
        details: String
        application: String
        comments: String
        createdAt: String!
        updatedAt: String!
        ImagesOnProducts: [ImagesOnProducts!]
        ProductsOptions: [ProductsOptions!]
        ProductOptionOnProducts: [ProductOptionOnProducts!]
        Cart: [Cart!]
    }

    type ImagesOnProducts {
        id: String!
        product: [Products]
        product_id: Int!
        images: [Images]
        images_id: Int
    }

    type ProductsOptions {
        id: String!
        product_id: Int!
        product: [Products!]
        value: String!
        title: String!
        type: String!
        ProductOptionOnProducts: [ProductOptionOnProducts!]
    }

    type ProductOptionOnProducts {
        id: String!
        product_id: Int!
        product: [Products!]
        product_options_id: Int!
        product_options: [ProductsOptions!]
    }

    type Brands {
        id: String!
        title: String!
        description: String
        updatedAt: String
        createdAt: String
    }

    type Categories {
        id: String!
        title: String!
        description: String
        icon: String
        images: [Images!]
        images_id: Int
    }

    type SubCategories {
        id: String!
        title: String!
        description: String
        icon: String
        images: [Images!]
        images_id: Int
    }

    type Cart {
        id: String!
        products: [Products!]
        products_id: Int
        amount: Int
    }

    type Shipping {
        id: String!
        address_id: Int!
        address: [Address!]
        comments: String
    }

    type Payments {
        id: String!
    }

    ##################### Queries #######################

    type Query {
        customers: [Customers!]!
        customer(id: ID!): Customers
        addresses: [Address!]!
        address(id: ID!): Address
        states: [State!]!
        state(id: ID!): State
        images: [Images!]!
        image(id: ID!): Images
        products: [Products!]!
        product(id: ID!): Products
        imagesOnProducts: [ImagesOnProducts!]!
        imageOnProduct(id: ID!): ImagesOnProducts
        productsOptions: [ProductsOptions!]!
        productOption(id: ID!): ProductsOptions
        productOptionOnProducts: [ProductOptionOnProducts!]!
        productOptionOnProduct(id: ID!): ProductOptionOnProducts
        brands: [Brands!]!
        brand(id: ID!): Brands
        categories: [Categories!]!
        category(id: ID!): Categories
        subCategories: [SubCategories!]!
        subCategory(id: ID!): SubCategories
        carts: [Cart!]!
        cart(id: ID!): Cart
        shippings: [Shipping!]!
        shipping(id: ID!): Shipping
        payments: [Payments!]!
        payment(id: ID!): Payments
    }

    ##################### Mutations #####################

    type Mutation {
        createCustomer(data: CustomerCreateInput): Customers
        createAddress(data: AddressCreateInput): Address
        # createState(title: String!, address: [Address!]): State!
        # createImage(
        #     name: String!
        #     link: String!
        #     description: String
        #     width: Int
        #     height: Int
        #     products: [Products]
        #     ImagesOnProducts: [ImagesOnProducts]
        #     Categories: [Categories]
        #     SubCategories: [SubCategories]
        # ): Images!
        # createProduct(
        #     title: String!
        #     sub_description: String
        #     description: String
        #     stock: Int!
        #     images: [Images!]
        #     sku: String!
        #     discount: Float
        #     price: Float!
        #     product_options_id: Int!
        #     weight: Float
        #     active: Boolean
        #     details: String
        #     application: String
        #     comments: String
        #     createdAt: String!
        #     updatedAt: String!
        #     ImagesOnProducts: [ImagesOnProducts!]
        #     ProductsOptions: [ProductsOptions!]
        #     ProductOptionOnProducts: [ProductOptionOnProducts!]
        #     Cart: [Cart!]
        # ): Products!
        # createImagesOnProduct(
        #     product: [Products]
        #     product_id: Int!
        #     images: [Images]
        #     images_id: Int
        # ): ImagesOnProducts!
        # createProductsOptions(
        #     product_id: Int!
        #     product: [Products!]
        #     value: String!
        #     title: String!
        #     type: String!
        #     ProductOptionOnProducts: [ProductOptionOnProducts!]
        # ): ProductsOptions!
        # createProductOptionOnProducts(
        #     product_id: Int!
        #     product: [Products!]
        #     product_options_id: Int!
        #     product_options: [ProductsOptions!]
        # ): ProductOptionOnProducts!
        # createBrand(title: String!, description: String): Brands!
        # createCategory(
        #     title: String!
        #     description: String
        #     icon: String
        #     images: [Images!]
        #     images_id: Int
        # ): Categories!
        # createSubCategory(
        #     title: String!
        #     description: String
        #     icon: String
        #     images: [Images!]
        #     images_id: Int
        # ): SubCategories!
        # createCart(products: [Products!], products_id: Int, amount: Int): Cart!
        # createShipping(
        #     address_id: Int!
        #     address: [Address!]
        #     comments: String
        # ): Shipping!
        # createPayment(id: ID!): Payments!
    }
`;

export { typeDefs };
