import { removeStoredAuthToken, storeAuthToken } from "./authToken";

export type AuthType = {
  email: string
  password: string
}

export type SignUpAuthType = AuthType & {
  passwordConfirmation: string
}

export type SendResetMailType = {
  email: string
}

export type PasswordResetType = {
  resetPasswordToken: string
  password: string
  passwordConfirmation: string
}

const authUrl = (path?: string) => `${process.env.REACT_APP_BACKEND_URL || ''}/users/${path || ''}`

// SignIn
export const onSignIn = async ({ email, password }: AuthType) =>
  fetch(authUrl('sign_in'), {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  })
  .then((res) => {
    const token = res.headers.get("Authorization")
    if (res.ok && token) {
      storeAuthToken(token)
      return res.json();
    }
    throw new Error(res.toString());
  })
  .catch((err) => console.error("err", err));

// SignUp
export const onSignUp = ({ email, password }: AuthType) =>
  fetch(authUrl(), {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email,
        password
      },
    }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.toString());
  })

// SignOut
export const onSignOut = async (token: string) =>
   fetch(authUrl("sign_out"), {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })
  .then((res) => {
    if (!res.ok) throw new Error(res.toString())
    removeStoredAuthToken()
  })
  // .catch((err) => console.error("err", err));


// PasswordReset
const sendEmail = async ({ email }: SendResetMailType) =>
  fetch(authUrl("password"), {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email,
      },
    }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.toString());
  })

const onReset = async ({ resetPasswordToken, password, passwordConfirmation }: PasswordResetType) =>
  fetch(authUrl("password"), {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        reset_password_token: resetPasswordToken,
        password,
        password_confirmation: passwordConfirmation,
      },
    }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.toString());
  })

export const PasswordReset = {
  sendEmail,
  onReset
}
