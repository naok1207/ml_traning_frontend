import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

/** Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  createTask?: Maybe<TaskCreatePayload>;
  deleteTask?: Maybe<TaskDeletePayload>;
  updateTask?: Maybe<TaskUpdatePayload>;
};


/** Mutation */
export type MutationCreateTaskArgs = {
  input: TaskCreateInput;
};


/** Mutation */
export type MutationDeleteTaskArgs = {
  input: TaskDeleteInput;
};


/** Mutation */
export type MutationUpdateTaskArgs = {
  input: TaskUpdateInput;
};

/** Query */
export type Query = {
  __typename?: 'Query';
  task: Task;
  tasks: Array<Task>;
};


/** Query */
export type QueryTaskArgs = {
  id: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['ISO8601DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  status: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type TaskAttributes = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** Autogenerated input type of TaskCreate */
export type TaskCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  params: TaskAttributes;
};

/** Autogenerated return type of TaskCreate */
export type TaskCreatePayload = {
  __typename?: 'TaskCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  task: Task;
};

/** Autogenerated input type of TaskDelete */
export type TaskDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of TaskDelete */
export type TaskDeletePayload = {
  __typename?: 'TaskDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated input type of TaskUpdate */
export type TaskUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  params: TaskAttributes;
};

/** Autogenerated return type of TaskUpdate */
export type TaskUpdatePayload = {
  __typename?: 'TaskUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  task: Task;
};

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title: string, description?: string | null }> };


export const TasksDocument = gql`
    query Tasks {
  tasks {
    id
    title
    description
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;