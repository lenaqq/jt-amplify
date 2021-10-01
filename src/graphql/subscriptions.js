/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSender = /* GraphQL */ `
  subscription OnCreateSender {
    onCreateSender {
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
export const onUpdateSender = /* GraphQL */ `
  subscription OnUpdateSender {
    onUpdateSender {
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
export const onDeleteSender = /* GraphQL */ `
  subscription OnDeleteSender {
    onDeleteSender {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
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
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
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
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
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
export const onCreateSuburbDriver = /* GraphQL */ `
  subscription OnCreateSuburbDriver {
    onCreateSuburbDriver {
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
export const onUpdateSuburbDriver = /* GraphQL */ `
  subscription OnUpdateSuburbDriver {
    onUpdateSuburbDriver {
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
export const onDeleteSuburbDriver = /* GraphQL */ `
  subscription OnDeleteSuburbDriver {
    onDeleteSuburbDriver {
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
