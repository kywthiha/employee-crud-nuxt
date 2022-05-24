import gql from 'graphql-tag'

export const ALL_EMPLOYEES_QUERY = gql`
  query ALL_EMPLOYEES_QUERY($page: Int!) {
    emplyoees(limit: 10, page: $page) {
      data {
        createdUser {
          id
          name
        }
        updatedUser {
          id
          name
        }
        id
        name
        email
        hire_date
        birthday
        job_positon
        salary
        gender
        phone
      }

      total
      per_page
      last_page
      current_page
      to
      from
    }
  }
`

export const CREATE_EMPLOYEE_MUTATION = gql`
  mutation createEmplyoee(
    $name: String!
    $email: String!
    $phone: String!
    $birthday: String!
    $job_positon: String!
    $salary: Float!
    $gender: String!
    $hire_date: String!
  ) {
    createEmplyoee(
      name: $name
      email: $email
      phone: $phone
      job_positon: $job_positon
      salary: $salary
      hire_date: $hire_date
      birthday: $birthday
      gender: $gender
    ) {
      createdUser {
        id
        name
      }
      updatedUser {
        id
        name
      }
      id
      name
      email
      birthday
      job_positon
      salary
      hire_date
      gender
      phone
    }
  }
`
