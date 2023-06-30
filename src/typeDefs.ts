import { gql } from "apollo-server";

export const typeDefs = gql`
    scalar Date
    scalar Json
    scalar Decimal

    type Customers {
        id: String!
        email: String!
        password: String!
        name: String!
        treatment: String
        phone: String
        cpf: String
        birth_date: Date
        cro: String
        # address_id: String
        address: Address
        createdAt: Date
        updatedAt: Date
    }

    type Address {
        id: String!
        address: String!
        number: String!
        zip_code: String!
        # state_id: String!
        state: [State!]
        name: String
        contact_number: String
        customers: [Customers!]
        shipping: [Shipping!]
        createdAt: Date
        updatedAt: Date
    }

    type State {
        id: String!
        title: String!
        address: [Address!]
        createdAt: Date
        updatedAt: Date
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
        createdAt: Date
        updatedAt: Date
    }

    type Products {
        id: String!
        title: String!
        sub_description: String
        description: String
        stock: Int!
        images: [Images!]
        sku: String!
        discount: Decimal
        price: Decimal!
        # product_options_id: String!
        weight: Float
        active: Boolean
        details: Json
        application: Json
        comments: Json
        createdAt: Date!
        updatedAt: Date!
        ImagesOnProducts: [ImagesOnProducts!]
        ProductsOptions: [ProductsOptions!]
        ProductOptionOnProducts: [ProductOptionOnProducts!]
        Cart: [Cart!]
    }

    type ImagesOnProducts {
        id: String!
        product: [Products]
        # product_id: String!
        images: [Images]
        # images_id: String
    }

    type ProductsOptions {
        id: String!
        # product_id: String!
        product: [Products!]
        value: String!
        title: String!
        type: String!
        ProductOptionOnProducts: [ProductOptionOnProducts!]
    }

    type ProductOptionOnProducts {
        id: String!
        # product_id: String!
        product: [Products!]
        # product_options_id: String!
        product_options: [ProductsOptions!]
    }

    type Brands {
        id: String!
        title: String!
        description: String
        updatedAt: Date
        createdAt: Date
    }

    type Categories {
        id: String!
        title: String!
        description: String
        icon: String
        images: [Images!]
        # images_id: String
    }

    type SubCategories {
        id: String!
        title: String!
        description: String
        icon: String
        images: [Images!]
        # images_id: String
    }

    type Cart {
        id: String!
        products: [Products!]
        # products_id: String
        amount: Int
    }

    type Shipping {
        id: String!
        # address_id: String!
        address: [Address!]
        comments: String
    }

    type Payments {
        id: String!
    }

    ##################### Inputs #######################

    input CreateCustomer {
        email: String!
        password: String!
        name: String!
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
        imagesOnProduct(id: ID!): ImagesOnProducts
        productsOptions: [ProductsOptions!]!
        productOptions(id: ID!): ProductsOptions
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

    type Mutation {
        createCustomer(input: CreateCustomer): Customers!
    }
`;
