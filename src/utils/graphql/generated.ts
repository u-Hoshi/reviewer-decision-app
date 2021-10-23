import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: 'group';
  id: Scalars['Int'];
  name: Scalars['String'];
  responsible_id: Scalars['Int'];
  slackUrl?: Maybe<Scalars['String']>;
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  avg?: Maybe<Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
  stddev?: Maybe<Group_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Sum_Fields>;
  var_pop?: Maybe<Group_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Var_Samp_Fields>;
  variance?: Maybe<Group_Variance_Fields>;
};


/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Group_Avg_Fields = {
  __typename?: 'group_avg_fields';
  id?: Maybe<Scalars['Float']>;
  responsible_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: Maybe<Array<Group_Bool_Exp>>;
  _not?: Maybe<Group_Bool_Exp>;
  _or?: Maybe<Array<Group_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  responsible_id?: Maybe<Int_Comparison_Exp>;
  slackUrl?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint */
  GroupPkey = 'group_pkey'
}

/** input type for incrementing numeric columns in table "group" */
export type Group_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  responsible_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  responsible_id?: Maybe<Scalars['Int']>;
  slackUrl?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  responsible_id?: Maybe<Scalars['Int']>;
  slackUrl?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  responsible_id?: Maybe<Scalars['Int']>;
  slackUrl?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  __typename?: 'group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** on conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns?: Array<Group_Update_Column>;
  where?: Maybe<Group_Bool_Exp>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  responsible_id?: Maybe<Order_By>;
  slackUrl?: Maybe<Order_By>;
};

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ResponsibleId = 'responsible_id',
  /** column name */
  SlackUrl = 'slackUrl'
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  responsible_id?: Maybe<Scalars['Int']>;
  slackUrl?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Group_Stddev_Fields = {
  __typename?: 'group_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  responsible_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Group_Stddev_Pop_Fields = {
  __typename?: 'group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  responsible_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Group_Stddev_Samp_Fields = {
  __typename?: 'group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  responsible_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Group_Sum_Fields = {
  __typename?: 'group_sum_fields';
  id?: Maybe<Scalars['Int']>;
  responsible_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ResponsibleId = 'responsible_id',
  /** column name */
  SlackUrl = 'slackUrl'
}

/** aggregate var_pop on columns */
export type Group_Var_Pop_Fields = {
  __typename?: 'group_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  responsible_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Group_Var_Samp_Fields = {
  __typename?: 'group_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  responsible_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Group_Variance_Fields = {
  __typename?: 'group_variance_fields';
  id?: Maybe<Scalars['Float']>;
  responsible_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "responsible" */
  delete_responsible?: Maybe<Responsible_Mutation_Response>;
  /** delete single row from the table: "responsible" */
  delete_responsible_by_pk?: Maybe<Responsible>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "responsible" */
  insert_responsible?: Maybe<Responsible_Mutation_Response>;
  /** insert a single row into the table: "responsible" */
  insert_responsible_one?: Maybe<Responsible>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update data of the table: "responsible" */
  update_responsible?: Maybe<Responsible_Mutation_Response>;
  /** update single row of the table: "responsible" */
  update_responsible_by_pk?: Maybe<Responsible>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ResponsibleArgs = {
  where: Responsible_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Responsible_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResponsibleArgs = {
  objects: Array<Responsible_Insert_Input>;
  on_conflict?: Maybe<Responsible_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Responsible_OneArgs = {
  object: Responsible_Insert_Input;
  on_conflict?: Maybe<Responsible_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ResponsibleArgs = {
  _inc?: Maybe<Responsible_Inc_Input>;
  _set?: Maybe<Responsible_Set_Input>;
  where: Responsible_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Responsible_By_PkArgs = {
  _inc?: Maybe<Responsible_Inc_Input>;
  _set?: Maybe<Responsible_Set_Input>;
  pk_columns: Responsible_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "responsible" */
  responsible: Array<Responsible>;
  /** fetch aggregated fields from the table: "responsible" */
  responsible_aggregate: Responsible_Aggregate;
  /** fetch data from the table: "responsible" using primary key columns */
  responsible_by_pk?: Maybe<Responsible>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootResponsibleArgs = {
  distinct_on?: Maybe<Array<Responsible_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Responsible_Order_By>>;
  where?: Maybe<Responsible_Bool_Exp>;
};


export type Query_RootResponsible_AggregateArgs = {
  distinct_on?: Maybe<Array<Responsible_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Responsible_Order_By>>;
  where?: Maybe<Responsible_Bool_Exp>;
};


export type Query_RootResponsible_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "responsible" */
export type Responsible = {
  __typename?: 'responsible';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "responsible" */
export type Responsible_Aggregate = {
  __typename?: 'responsible_aggregate';
  aggregate?: Maybe<Responsible_Aggregate_Fields>;
  nodes: Array<Responsible>;
};

/** aggregate fields of "responsible" */
export type Responsible_Aggregate_Fields = {
  __typename?: 'responsible_aggregate_fields';
  avg?: Maybe<Responsible_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Responsible_Max_Fields>;
  min?: Maybe<Responsible_Min_Fields>;
  stddev?: Maybe<Responsible_Stddev_Fields>;
  stddev_pop?: Maybe<Responsible_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Responsible_Stddev_Samp_Fields>;
  sum?: Maybe<Responsible_Sum_Fields>;
  var_pop?: Maybe<Responsible_Var_Pop_Fields>;
  var_samp?: Maybe<Responsible_Var_Samp_Fields>;
  variance?: Maybe<Responsible_Variance_Fields>;
};


/** aggregate fields of "responsible" */
export type Responsible_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Responsible_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Responsible_Avg_Fields = {
  __typename?: 'responsible_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "responsible". All fields are combined with a logical 'AND'. */
export type Responsible_Bool_Exp = {
  _and?: Maybe<Array<Responsible_Bool_Exp>>;
  _not?: Maybe<Responsible_Bool_Exp>;
  _or?: Maybe<Array<Responsible_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "responsible" */
export enum Responsible_Constraint {
  /** unique or primary key constraint */
  ResponsiblePkey = 'responsible_pkey'
}

/** input type for incrementing numeric columns in table "responsible" */
export type Responsible_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "responsible" */
export type Responsible_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Responsible_Max_Fields = {
  __typename?: 'responsible_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Responsible_Min_Fields = {
  __typename?: 'responsible_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "responsible" */
export type Responsible_Mutation_Response = {
  __typename?: 'responsible_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Responsible>;
};

/** on conflict condition type for table "responsible" */
export type Responsible_On_Conflict = {
  constraint: Responsible_Constraint;
  update_columns?: Array<Responsible_Update_Column>;
  where?: Maybe<Responsible_Bool_Exp>;
};

/** Ordering options when selecting data from "responsible". */
export type Responsible_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: responsible */
export type Responsible_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "responsible" */
export enum Responsible_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "responsible" */
export type Responsible_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Responsible_Stddev_Fields = {
  __typename?: 'responsible_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Responsible_Stddev_Pop_Fields = {
  __typename?: 'responsible_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Responsible_Stddev_Samp_Fields = {
  __typename?: 'responsible_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Responsible_Sum_Fields = {
  __typename?: 'responsible_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "responsible" */
export enum Responsible_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Responsible_Var_Pop_Fields = {
  __typename?: 'responsible_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Responsible_Var_Samp_Fields = {
  __typename?: 'responsible_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Responsible_Variance_Fields = {
  __typename?: 'responsible_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "responsible" */
  responsible: Array<Responsible>;
  /** fetch aggregated fields from the table: "responsible" */
  responsible_aggregate: Responsible_Aggregate;
  /** fetch data from the table: "responsible" using primary key columns */
  responsible_by_pk?: Maybe<Responsible>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootResponsibleArgs = {
  distinct_on?: Maybe<Array<Responsible_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Responsible_Order_By>>;
  where?: Maybe<Responsible_Bool_Exp>;
};


export type Subscription_RootResponsible_AggregateArgs = {
  distinct_on?: Maybe<Array<Responsible_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Responsible_Order_By>>;
  where?: Maybe<Responsible_Bool_Exp>;
};


export type Subscription_RootResponsible_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  profile_photo_url: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  profile_photo_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  profile_photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type InsertGroupMutationVariables = Exact<{
  slackUrl: Scalars['String'];
  responsible_id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type InsertGroupMutation = { __typename?: 'mutation_root', insert_group_one?: { __typename?: 'group', id: number, name: string, responsible_id: number, slackUrl?: string | null | undefined } | null | undefined };

export type InsertUserMutationVariables = Exact<{
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', email: string, name: string, id: string, profile_photo_url: string, created_at: any, updated_at: any } | null | undefined };

export type UserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, email: string, name: string, profile_photo_url: string, updated_at: any, created_at: any } | null | undefined };


export const InsertGroupDocument = gql`
    mutation InsertGroup($slackUrl: String!, $responsible_id: Int!, $name: String!) {
  insert_group_one(
    object: {name: $name, responsible_id: $responsible_id, slackUrl: $slackUrl}
  ) {
    id
    name
    responsible_id
    slackUrl
  }
}
    `;
export type InsertGroupMutationFn = Apollo.MutationFunction<InsertGroupMutation, InsertGroupMutationVariables>;

/**
 * __useInsertGroupMutation__
 *
 * To run a mutation, you first call `useInsertGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGroupMutation, { data, loading, error }] = useInsertGroupMutation({
 *   variables: {
 *      slackUrl: // value for 'slackUrl'
 *      responsible_id: // value for 'responsible_id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useInsertGroupMutation(baseOptions?: Apollo.MutationHookOptions<InsertGroupMutation, InsertGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertGroupMutation, InsertGroupMutationVariables>(InsertGroupDocument, options);
      }
export type InsertGroupMutationHookResult = ReturnType<typeof useInsertGroupMutation>;
export type InsertGroupMutationResult = Apollo.MutationResult<InsertGroupMutation>;
export type InsertGroupMutationOptions = Apollo.BaseMutationOptions<InsertGroupMutation, InsertGroupMutationVariables>;
export const InsertUserDocument = gql`
    mutation InsertUser($email: String!, $id: String!, $name: String!) {
  insert_users_one(
    object: {email: $email, id: $id, name: $name, profile_photo_url: ""}
  ) {
    email
    name
    id
    profile_photo_url
    created_at
    updated_at
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const UserByIdDocument = gql`
    query UserById($id: String!) {
  users_by_pk(id: $id) {
    id
    email
    name
    profile_photo_url
    updated_at
    created_at
  }
}
    `;

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions: Apollo.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
      }
export function useUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>;