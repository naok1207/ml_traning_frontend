import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  {
    testField
  }
`

const useTest = () => {
  const { data = {} } = useQuery<string>(QUERY)

  return data
}

export default useTest
