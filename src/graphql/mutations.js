/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSender = /* GraphQL */ `
  mutation CreateSender(
    $input: CreateSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    createSender(input: $input, condition: $condition) {
      id
      stops {
        items {
          id
          senderID
          personName
          address
          suburb
          postcode
          state
          isDepot
          originORdestination
          active
          createdAt
          updatedAt
        }
        nextToken
      }
      jobs {
        items {
          id
          senderID
          itemValue
          freightCost
          insurance
          description
          stripeID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSender = /* GraphQL */ `
  mutation UpdateSender(
    $input: UpdateSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    updateSender(input: $input, condition: $condition) {
      id
      stops {
        items {
          id
          senderID
          personName
          address
          suburb
          postcode
          state
          isDepot
          originORdestination
          active
          createdAt
          updatedAt
        }
        nextToken
      }
      jobs {
        items {
          id
          senderID
          itemValue
          freightCost
          insurance
          description
          stripeID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSender = /* GraphQL */ `
  mutation DeleteSender(
    $input: DeleteSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    deleteSender(input: $input, condition: $condition) {
      id
      stops {
        items {
          id
          senderID
          personName
          address
          suburb
          postcode
          state
          isDepot
          originORdestination
          active
          createdAt
          updatedAt
        }
        nextToken
      }
      jobs {
        items {
          id
          senderID
          itemValue
          freightCost
          insurance
          description
          stripeID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStop = /* GraphQL */ `
  mutation CreateStop(
    $input: CreateStopInput!
    $condition: ModelStopConditionInput
  ) {
    createStop(input: $input, condition: $condition) {
      id
      senderID
      personName
      address
      suburb
      postcode
      state
      isDepot
      originORdestination
      active
      createdAt
      updatedAt
    }
  }
`;
export const updateStop = /* GraphQL */ `
  mutation UpdateStop(
    $input: UpdateStopInput!
    $condition: ModelStopConditionInput
  ) {
    updateStop(input: $input, condition: $condition) {
      id
      senderID
      personName
      address
      suburb
      postcode
      state
      isDepot
      originORdestination
      active
      createdAt
      updatedAt
    }
  }
`;
export const deleteStop = /* GraphQL */ `
  mutation DeleteStop(
    $input: DeleteStopInput!
    $condition: ModelStopConditionInput
  ) {
    deleteStop(input: $input, condition: $condition) {
      id
      senderID
      personName
      address
      suburb
      postcode
      state
      isDepot
      originORdestination
      active
      createdAt
      updatedAt
    }
  }
`;
export const createOperator = /* GraphQL */ `
  mutation CreateOperator(
    $input: CreateOperatorInput!
    $condition: ModelOperatorConditionInput
  ) {
    createOperator(input: $input, condition: $condition) {
      id
      depotID
      incomingRoutes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRoutes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOperator = /* GraphQL */ `
  mutation UpdateOperator(
    $input: UpdateOperatorInput!
    $condition: ModelOperatorConditionInput
  ) {
    updateOperator(input: $input, condition: $condition) {
      id
      depotID
      incomingRoutes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRoutes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOperator = /* GraphQL */ `
  mutation DeleteOperator(
    $input: DeleteOperatorInput!
    $condition: ModelOperatorConditionInput
  ) {
    deleteOperator(input: $input, condition: $condition) {
      id
      depotID
      incomingRoutes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRoutes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      senderID
      itemValue
      freightCost
      insurance
      description
      stripeID
      routes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      photos {
        items {
          id
          jobID
          url
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      senderID
      itemValue
      freightCost
      insurance
      description
      stripeID
      routes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      photos {
        items {
          id
          jobID
          url
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      senderID
      itemValue
      freightCost
      insurance
      description
      stripeID
      routes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      photos {
        items {
          id
          jobID
          url
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRoute = /* GraphQL */ `
  mutation CreateRoute(
    $input: CreateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    createRoute(input: $input, condition: $condition) {
      id
      jobID
      fromStopID
      from {
        id
        senderID
        personName
        address
        suburb
        postcode
        state
        isDepot
        originORdestination
        active
        createdAt
        updatedAt
      }
      toStopID
      to {
        id
        senderID
        personName
        address
        suburb
        postcode
        state
        isDepot
        originORdestination
        active
        createdAt
        updatedAt
      }
      driverID
      driver {
        id
        routes {
          nextToken
        }
        available
        suburbs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdBy
      updatedBy
      segmentNo
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute(
    $input: UpdateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    updateRoute(input: $input, condition: $condition) {
      id
      jobID
      fromStopID
      from {
        id
        senderID
        personName
        address
        suburb
        postcode
        state
        isDepot
        originORdestination
        active
        createdAt
        updatedAt
      }
      toStopID
      to {
        id
        senderID
        personName
        address
        suburb
        postcode
        state
        isDepot
        originORdestination
        active
        createdAt
        updatedAt
      }
      driverID
      driver {
        id
        routes {
          nextToken
        }
        available
        suburbs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdBy
      updatedBy
      segmentNo
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute(
    $input: DeleteRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    deleteRoute(input: $input, condition: $condition) {
      id
      jobID
      fromStopID
      from {
        id
        senderID
        personName
        address
        suburb
        postcode
        state
        isDepot
        originORdestination
        active
        createdAt
        updatedAt
      }
      toStopID
      to {
        id
        senderID
        personName
        address
        suburb
        postcode
        state
        isDepot
        originORdestination
        active
        createdAt
        updatedAt
      }
      driverID
      driver {
        id
        routes {
          nextToken
        }
        available
        suburbs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdBy
      updatedBy
      segmentNo
      status
      createdAt
      updatedAt
    }
  }
`;
export const createSuburb = /* GraphQL */ `
  mutation CreateSuburb(
    $input: CreateSuburbInput!
    $condition: ModelSuburbConditionInput
  ) {
    createSuburb(input: $input, condition: $condition) {
      id
      name
      postcode
      state
      drivers {
        items {
          id
          suburbID
          driverID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSuburb = /* GraphQL */ `
  mutation UpdateSuburb(
    $input: UpdateSuburbInput!
    $condition: ModelSuburbConditionInput
  ) {
    updateSuburb(input: $input, condition: $condition) {
      id
      name
      postcode
      state
      drivers {
        items {
          id
          suburbID
          driverID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSuburb = /* GraphQL */ `
  mutation DeleteSuburb(
    $input: DeleteSuburbInput!
    $condition: ModelSuburbConditionInput
  ) {
    deleteSuburb(input: $input, condition: $condition) {
      id
      name
      postcode
      state
      drivers {
        items {
          id
          suburbID
          driverID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSuburbDriver = /* GraphQL */ `
  mutation CreateSuburbDriver(
    $input: CreateSuburbDriverInput!
    $condition: ModelSuburbDriverConditionInput
  ) {
    createSuburbDriver(input: $input, condition: $condition) {
      id
      suburbID
      driverID
      suburb {
        id
        name
        postcode
        state
        drivers {
          nextToken
        }
        createdAt
        updatedAt
      }
      driver {
        id
        routes {
          nextToken
        }
        available
        suburbs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSuburbDriver = /* GraphQL */ `
  mutation UpdateSuburbDriver(
    $input: UpdateSuburbDriverInput!
    $condition: ModelSuburbDriverConditionInput
  ) {
    updateSuburbDriver(input: $input, condition: $condition) {
      id
      suburbID
      driverID
      suburb {
        id
        name
        postcode
        state
        drivers {
          nextToken
        }
        createdAt
        updatedAt
      }
      driver {
        id
        routes {
          nextToken
        }
        available
        suburbs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSuburbDriver = /* GraphQL */ `
  mutation DeleteSuburbDriver(
    $input: DeleteSuburbDriverInput!
    $condition: ModelSuburbDriverConditionInput
  ) {
    deleteSuburbDriver(input: $input, condition: $condition) {
      id
      suburbID
      driverID
      suburb {
        id
        name
        postcode
        state
        drivers {
          nextToken
        }
        createdAt
        updatedAt
      }
      driver {
        id
        routes {
          nextToken
        }
        available
        suburbs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
      id
      routes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      available
      suburbs {
        items {
          id
          suburbID
          driverID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
      id
      routes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      available
      suburbs {
        items {
          id
          suburbID
          driverID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
      id
      routes {
        items {
          id
          jobID
          fromStopID
          toStopID
          driverID
          createdBy
          updatedBy
          segmentNo
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      available
      suburbs {
        items {
          id
          suburbID
          driverID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      jobID
      url
      type
      createdAt
      updatedAt
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      jobID
      url
      type
      createdAt
      updatedAt
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      jobID
      url
      type
      createdAt
      updatedAt
    }
  }
`;
