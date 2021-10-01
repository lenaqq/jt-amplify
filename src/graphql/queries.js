/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSender = /* GraphQL */ `
  query GetSender($id: ID!) {
    getSender(id: $id) {
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
export const listSenders = /* GraphQL */ `
  query ListSenders(
    $filter: ModelSenderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stops {
          nextToken
        }
        jobs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStop = /* GraphQL */ `
  query GetStop($id: ID!) {
    getStop(id: $id) {
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
export const listStops = /* GraphQL */ `
  query ListStops(
    $filter: ModelStopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStops(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getOperator = /* GraphQL */ `
  query GetOperator($id: ID!) {
    getOperator(id: $id) {
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
export const listOperators = /* GraphQL */ `
  query ListOperators(
    $filter: ModelOperatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOperators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        depotID
        incomingRoutes {
          nextToken
        }
        outgoingRoutes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderID
        itemValue
        freightCost
        insurance
        description
        stripeID
        routes {
          nextToken
        }
        status
        photos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
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
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          available
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
      nextToken
    }
  }
`;
export const getSuburb = /* GraphQL */ `
  query GetSuburb($id: ID!) {
    getSuburb(id: $id) {
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
export const listSuburbs = /* GraphQL */ `
  query ListSuburbs(
    $filter: ModelSuburbFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuburbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
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
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      jobID
      url
      type
      createdAt
      updatedAt
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const stopsBySender = /* GraphQL */ `
  query StopsBySender(
    $senderID: ID
    $originORdestination: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stopsBySender(
      senderID: $senderID
      originORdestination: $originORdestination
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const jobsBySenderStatus = /* GraphQL */ `
  query JobsBySenderStatus(
    $senderID: ID
    $status: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jobsBySenderStatus(
      senderID: $senderID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderID
        itemValue
        freightCost
        insurance
        description
        stripeID
        routes {
          nextToken
        }
        status
        photos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const routesByJob = /* GraphQL */ `
  query RoutesByJob(
    $jobID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    routesByJob(
      jobID: $jobID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          available
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
      nextToken
    }
  }
`;
export const routesByDriverStatus = /* GraphQL */ `
  query RoutesByDriverStatus(
    $driverID: ID
    $status: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    routesByDriverStatus(
      driverID: $driverID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          available
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
      nextToken
    }
  }
`;
export const incomingRoutes = /* GraphQL */ `
  query IncomingRoutes(
    $toStopID: ID
    $status: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incomingRoutes(
      toStopID: $toStopID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          available
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
      nextToken
    }
  }
`;
export const outgoingRoutes = /* GraphQL */ `
  query OutgoingRoutes(
    $fromStopID: ID
    $status: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    outgoingRoutes(
      fromStopID: $fromStopID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          available
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
      nextToken
    }
  }
`;
export const photosByJob = /* GraphQL */ `
  query PhotosByJob(
    $jobID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    photosByJob(
      jobID: $jobID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
