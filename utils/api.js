// import dotenv from 'dotenv';
// dotenv.config();

const API_KEY = process.env.REACT_API_KEY
class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  post(post) {
    try {
      const request = new Request(this.url + "/products.json", {
        method: "post",
        body: JSON.stringify(post),
      });
      return useRequest(request);
    } catch (err) {
      console.error(err);
    }
  }

  delete(productId, token) {
    try {
      const request = new Request(
        `${this.url}/products/${productId}.json?auth=${token}`,
        {
          method: "DELETE",
        }
      );
      return useRequest(request);
    } catch (err) {
      console.log(err);
    }
  }
  updateProduct(id, title, description, imageUrl, token) {
    try {
      const request = new Request(
        `${this.url}/products/${id}.json?auth=${token}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            imageUrl,
          }),
        }
      );
      return useRequest(request);
    } catch (err) {
      console.log(err);
    }
  }

  createProduct(title, description, imageUrl, price, token, userId) {
    try {
      const request = new Request(`${this.url}/products.json?auth=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price,
          ownerId: userId,
        }),
      });
      return useRequest(request);
    } catch (err) {
      console.log(err);
    }
  }

  get() {
    try {
      const request = new Request(this.url + "/products.json", {
        method: "get",
      });
      return useRequest(request);
    } catch (err) {
      console.log(err);
    }
  }

  signUp(email, password) {
    try {
      const request = new Request(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );
      return useRequest(request);
    } catch (err) {
      throw new Error(err);
    }
  }

  login(email, password) {
    console.log(API_KEY);
    try {
      const request = new Request(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );
      return useRequest(request);
    } catch (err) {
      throw new Error(err);
    }
  }
}

function useRequest(request) {
  const response = fetch(request);
  return response;
}

export const apiService = new ApiService(
  "https://js-simple-6efdf.firebaseio.com"
);
