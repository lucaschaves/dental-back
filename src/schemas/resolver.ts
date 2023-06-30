export const Customers = {
    id: (parent: any) => parent.id,
    email: (parent: any) => parent.email,
    password: (parent: any) => parent.password,
    name: (parent: any) => parent.name,
    treatment: (parent: any) => parent.treatment,
    phone: (parent: any) => parent.phone,
    cpf: (parent: any) => parent.cpf,
    birth_date: (parent: any) => parent.birth_date,
    cro: (parent: any) => parent.cro,
    // address_id: (parent: any) => parent.address_id,
    address: (parent: any) => parent.address,
};

export const Address = {
    id: (parent: any) => parent.id,
    address: (parent: any) => parent.address,
    number: (parent: any) => parent.number,
    zip_code: (parent: any) => parent.zip_code,
    // state_id: (parent: any) => parent.state_id,
    // state: (parent: any) => parent.state,
    name: (parent: any) => parent.name,
    contact_number: (parent: any) => parent.contact_number,
    customers: (parent: any) => parent.customers,
    // shipping: (parent: any) => parent.shipping,
};

// export const Brands = {
//     id: (parent: any) => parent.id,
//     title: (parent: any) => parent.title,
//     description: (parent: any) => parent.description,
// };
