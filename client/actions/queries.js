export const createUser = async (user) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/createUser`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user?.id,
          firstName: user?.given_name,
          lastName: user?.family_name,
          email: user?.email,
          image: user?.picture,
        }),
      }
    );

    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    }

    // Optionally, parse the JSON response
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error; // Optionally rethrow the error for further handling
  }
};

export const getMyUser = async (uid) => {
  try {
    // Make a POST request to the `/api/getUser` endpoint
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getUser`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid }),
      }
    );

    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the fetched user data
    return data.user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error; // Optionally rethrow the error for further handling
  }
};

export const getUserGroups = async (uid) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/telegram/user-groups?uid=${uid}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch user groups: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user groups:", error.message);
    return null;
  }
};

export const setGroupRules = async (data, userId) => {
  if (!data || !userId) {
    console.log("data or userId is missing");
    return null;
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/telegram/set-rules`,
      {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          name: data?.name,
          currency: data?.currency,
          isPaidGroup: data?.isPaidGroup,
          pricingType: data?.pricingType,
          oneTimePrice: data?.oneTimePrice,
          yearlyPrice: data?.yearlyPrice,
          monthlyPrice: data?.monthlyPrice,
        }),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error(`Error setting group settings: ${errorDetails.message}`);
      // You can throw the error message from the backend to be handled by the catch block
      throw new Error(errorDetails.message || "Failed to set group settings.");
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error setting group settings:", error.message);
    return { message: error.message || "Unexpected error occurred." };
  }
};

export const handleDeleteGroup = async (groupId) => {
  try {
    if (!groupId) {
      console.log("Group Id must be provided");
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/deleteGroup`,
      {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupId }),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error(`Error deleting group: ${errorDetails.message}`);
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error deleting group:", error.message);
    return { message: error.message || "Unexpected error occurred." };
  }
};

export const fetchQrCode = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-qr`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch QR code: ${response.statusText}`);
    }

    // Parse the JSON response to get the QR code
    const data = await response.json();
    if (!data.qrCode) {
      throw new Error("QR code not found in response");
    }

    return data.qrCode;
  } catch (error) {
    console.error("Error fetching QR code:", error.message);
    throw error; // Optionally rethrow the error for further handling
  }
};
