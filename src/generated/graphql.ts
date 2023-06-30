import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Json: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  address: Scalars['String']['output'];
  contact_number?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  customers?: Maybe<Array<Customers>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  shipping?: Maybe<Array<Shipping>>;
  state?: Maybe<Array<State>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  zip_code: Scalars['String']['output'];
};

export type Brands = {
  __typename?: 'Brands';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  amount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  products?: Maybe<Array<Products>>;
};

export type Categories = {
  __typename?: 'Categories';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Images>>;
  title: Scalars['String']['output'];
};

export type CreateCustomer = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Customers = {
  __typename?: 'Customers';
  address?: Maybe<Address>;
  birth_date?: Maybe<Scalars['Date']['output']>;
  cpf?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  cro?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  treatment?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Images = {
  __typename?: 'Images';
  Categories?: Maybe<Array<Maybe<Categories>>>;
  ImagesOnProducts?: Maybe<Array<Maybe<ImagesOnProducts>>>;
  SubCategories?: Maybe<Array<Maybe<SubCategories>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Products>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ImagesOnProducts = {
  __typename?: 'ImagesOnProducts';
  id: Scalars['String']['output'];
  images?: Maybe<Array<Maybe<Images>>>;
  product?: Maybe<Array<Maybe<Products>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customers;
};


export type MutationCreateCustomerArgs = {
  input?: InputMaybe<CreateCustomer>;
};

export type Payments = {
  __typename?: 'Payments';
  id: Scalars['String']['output'];
};

export type ProductOptionOnProducts = {
  __typename?: 'ProductOptionOnProducts';
  id: Scalars['String']['output'];
  product?: Maybe<Array<Products>>;
  product_options?: Maybe<Array<ProductsOptions>>;
};

export type Products = {
  __typename?: 'Products';
  Cart?: Maybe<Array<Cart>>;
  ImagesOnProducts?: Maybe<Array<ImagesOnProducts>>;
  ProductOptionOnProducts?: Maybe<Array<ProductOptionOnProducts>>;
  ProductsOptions?: Maybe<Array<ProductsOptions>>;
  active?: Maybe<Scalars['Boolean']['output']>;
  application?: Maybe<Scalars['Json']['output']>;
  comments?: Maybe<Scalars['Json']['output']>;
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['Json']['output']>;
  discount?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Images>>;
  price: Scalars['Decimal']['output'];
  sku: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  sub_description?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ProductsOptions = {
  __typename?: 'ProductsOptions';
  ProductOptionOnProducts?: Maybe<Array<ProductOptionOnProducts>>;
  id: Scalars['String']['output'];
  product?: Maybe<Array<Products>>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses: Array<Address>;
  brand?: Maybe<Brands>;
  brands: Array<Brands>;
  cart?: Maybe<Cart>;
  carts: Array<Cart>;
  categories: Array<Categories>;
  category?: Maybe<Categories>;
  customer?: Maybe<Customers>;
  customers: Array<Customers>;
  image?: Maybe<Images>;
  images: Array<Images>;
  imagesOnProduct?: Maybe<ImagesOnProducts>;
  imagesOnProducts: Array<ImagesOnProducts>;
  payment?: Maybe<Payments>;
  payments: Array<Payments>;
  product?: Maybe<Products>;
  productOptions?: Maybe<ProductsOptions>;
  products: Array<Products>;
  productsOptions: Array<ProductsOptions>;
  shipping?: Maybe<Shipping>;
  shippings: Array<Shipping>;
  state?: Maybe<State>;
  states: Array<State>;
  subCategories: Array<SubCategories>;
  subCategory?: Maybe<SubCategories>;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImagesOnProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductOptionsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShippingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStateArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySubCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type Shipping = {
  __typename?: 'Shipping';
  address?: Maybe<Array<Address>>;
  comments?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export type State = {
  __typename?: 'State';
  address?: Maybe<Array<Address>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type SubCategories = {
  __typename?: 'SubCategories';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Images>>;
  title: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Brands: ResolverTypeWrapper<Brands>;
  Cart: ResolverTypeWrapper<Cart>;
  Categories: ResolverTypeWrapper<Categories>;
  CreateCustomer: CreateCustomer;
  Customers: ResolverTypeWrapper<Customers>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Images: ResolverTypeWrapper<Images>;
  ImagesOnProducts: ResolverTypeWrapper<ImagesOnProducts>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Json: ResolverTypeWrapper<Scalars['Json']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Payments: ResolverTypeWrapper<Payments>;
  ProductOptionOnProducts: ResolverTypeWrapper<ProductOptionOnProducts>;
  Products: ResolverTypeWrapper<Products>;
  ProductsOptions: ResolverTypeWrapper<ProductsOptions>;
  Query: ResolverTypeWrapper<{}>;
  Shipping: ResolverTypeWrapper<Shipping>;
  State: ResolverTypeWrapper<State>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SubCategories: ResolverTypeWrapper<SubCategories>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  Boolean: Scalars['Boolean']['output'];
  Brands: Brands;
  Cart: Cart;
  Categories: Categories;
  CreateCustomer: CreateCustomer;
  Customers: Customers;
  Date: Scalars['Date']['output'];
  Decimal: Scalars['Decimal']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Images: Images;
  ImagesOnProducts: ImagesOnProducts;
  Int: Scalars['Int']['output'];
  Json: Scalars['Json']['output'];
  Mutation: {};
  Payments: Payments;
  ProductOptionOnProducts: ProductOptionOnProducts;
  Products: Products;
  ProductsOptions: ProductsOptions;
  Query: {};
  Shipping: Shipping;
  State: State;
  String: Scalars['String']['output'];
  SubCategories: SubCategories;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contact_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  customers?: Resolver<Maybe<Array<ResolversTypes['Customers']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipping?: Resolver<Maybe<Array<ResolversTypes['Shipping']>>, ParentType, ContextType>;
  state?: Resolver<Maybe<Array<ResolversTypes['State']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  zip_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Brands'] = ResolversParentTypes['Brands']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['Products']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Categories'] = ResolversParentTypes['Categories']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['Images']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customers'] = ResolversParentTypes['Customers']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  birth_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  cpf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  cro?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  treatment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type ImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Images'] = ResolversParentTypes['Images']> = {
  Categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Categories']>>>, ParentType, ContextType>;
  ImagesOnProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImagesOnProducts']>>>, ParentType, ContextType>;
  SubCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubCategories']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Products']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImagesOnProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImagesOnProducts'] = ResolversParentTypes['ImagesOnProducts']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Images']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<Array<Maybe<ResolversTypes['Products']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomer?: Resolver<ResolversTypes['Customers'], ParentType, ContextType, Partial<MutationCreateCustomerArgs>>;
};

export type PaymentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payments'] = ResolversParentTypes['Payments']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionOnProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionOnProducts'] = ResolversParentTypes['ProductOptionOnProducts']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<Maybe<Array<ResolversTypes['Products']>>, ParentType, ContextType>;
  product_options?: Resolver<Maybe<Array<ResolversTypes['ProductsOptions']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = {
  Cart?: Resolver<Maybe<Array<ResolversTypes['Cart']>>, ParentType, ContextType>;
  ImagesOnProducts?: Resolver<Maybe<Array<ResolversTypes['ImagesOnProducts']>>, ParentType, ContextType>;
  ProductOptionOnProducts?: Resolver<Maybe<Array<ResolversTypes['ProductOptionOnProducts']>>, ParentType, ContextType>;
  ProductsOptions?: Resolver<Maybe<Array<ResolversTypes['ProductsOptions']>>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['Images']>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sub_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsOptions'] = ResolversParentTypes['ProductsOptions']> = {
  ProductOptionOnProducts?: Resolver<Maybe<Array<ResolversTypes['ProductOptionOnProducts']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<Maybe<Array<ResolversTypes['Products']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<QueryAddressArgs, 'id'>>;
  addresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['Brands']>, ParentType, ContextType, RequireFields<QueryBrandArgs, 'id'>>;
  brands?: Resolver<Array<ResolversTypes['Brands']>, ParentType, ContextType>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'id'>>;
  carts?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['Categories']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Categories']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customers']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  customers?: Resolver<Array<ResolversTypes['Customers']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Images']>, ParentType, ContextType, RequireFields<QueryImageArgs, 'id'>>;
  images?: Resolver<Array<ResolversTypes['Images']>, ParentType, ContextType>;
  imagesOnProduct?: Resolver<Maybe<ResolversTypes['ImagesOnProducts']>, ParentType, ContextType, RequireFields<QueryImagesOnProductArgs, 'id'>>;
  imagesOnProducts?: Resolver<Array<ResolversTypes['ImagesOnProducts']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payments']>, ParentType, ContextType, RequireFields<QueryPaymentArgs, 'id'>>;
  payments?: Resolver<Array<ResolversTypes['Payments']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productOptions?: Resolver<Maybe<ResolversTypes['ProductsOptions']>, ParentType, ContextType, RequireFields<QueryProductOptionsArgs, 'id'>>;
  products?: Resolver<Array<ResolversTypes['Products']>, ParentType, ContextType>;
  productsOptions?: Resolver<Array<ResolversTypes['ProductsOptions']>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['Shipping']>, ParentType, ContextType, RequireFields<QueryShippingArgs, 'id'>>;
  shippings?: Resolver<Array<ResolversTypes['Shipping']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType, RequireFields<QueryStateArgs, 'id'>>;
  states?: Resolver<Array<ResolversTypes['State']>, ParentType, ContextType>;
  subCategories?: Resolver<Array<ResolversTypes['SubCategories']>, ParentType, ContextType>;
  subCategory?: Resolver<Maybe<ResolversTypes['SubCategories']>, ParentType, ContextType, RequireFields<QuerySubCategoryArgs, 'id'>>;
};

export type ShippingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shipping'] = ResolversParentTypes['Shipping']> = {
  address?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = {
  address?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubCategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubCategories'] = ResolversParentTypes['SubCategories']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['Images']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Brands?: BrandsResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  Categories?: CategoriesResolvers<ContextType>;
  Customers?: CustomersResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  Images?: ImagesResolvers<ContextType>;
  ImagesOnProducts?: ImagesOnProductsResolvers<ContextType>;
  Json?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Payments?: PaymentsResolvers<ContextType>;
  ProductOptionOnProducts?: ProductOptionOnProductsResolvers<ContextType>;
  Products?: ProductsResolvers<ContextType>;
  ProductsOptions?: ProductsOptionsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shipping?: ShippingResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
  SubCategories?: SubCategoriesResolvers<ContextType>;
};

