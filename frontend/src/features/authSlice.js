import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  evaluations: [],
  questions: [],
  kkm: [],
};

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        nis: user.nis,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const RegisterGuru = createAsyncThunk(
  "user/RegisterGuru",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/register-guru", {
        fullName: user.fullName,
        nip: user.nip,
        password: user.password,
        school: user.school,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const RegisterSiswa = createAsyncThunk(
  "user/RegisterSiswa",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/register-siswa",
        {
          fullName: user.fullName,
          nis: user.nis,
          password: user.password,
          class: user.class,
          token: user.token,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:5000/me", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete("http://localhost:5000/logout");
});

export const createEvaluation = createAsyncThunk(
  "evaluations/createEvaluation",
  async (evaluationData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/evaluations",
        evaluationData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getEvaluations = createAsyncThunk(
  "evaluations/getEvaluations",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/evaluations", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getQuestionsByEvaluation = createAsyncThunk(
  "questions/getQuestionsByEvaluation",
  async (evaluation_id, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/questions/evaluation/${evaluation_id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const createQuestion = createAsyncThunk(
  "questions/createQuestion",
  async (questionData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/questions",
        questionData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const updateQuestion = createAsyncThunk(
  "questions/updateQuestion",
  async ({ id, questionData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/questions/${id}`,
        questionData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const deleteQuestion = createAsyncThunk(
  "questions/deleteQuestion",
  async (questionId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/questions/${questionId}`,
        {
          withCredentials: true,
        }
      );
      return { questionId, message: response.data.msg };
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getKkm = createAsyncThunk("kkm/getKkm", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:5000/kkm", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const setKkm = createAsyncThunk(
  "kkm/setKkm",
  async (kkmData, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/kkm", kkmData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(RegisterGuru.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(RegisterGuru.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.msg;
    });
    builder.addCase(RegisterGuru.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(RegisterSiswa.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(RegisterSiswa.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.msg;
    });
    builder.addCase(RegisterSiswa.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(createEvaluation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createEvaluation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.msg;
      state.evaluations.push(action.payload.evaluation);
    });
    builder.addCase(createEvaluation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getEvaluations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEvaluations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.evaluations = action.payload;
    });
    builder.addCase(getEvaluations.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getQuestionsByEvaluation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getQuestionsByEvaluation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.questions = action.payload.questions;
    });
    builder.addCase(getQuestionsByEvaluation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(createQuestion.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createQuestion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.msg;
      state.questions.push(action.payload.question);
    });
    builder.addCase(createQuestion.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(updateQuestion.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateQuestion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.msg;
    });
    builder.addCase(updateQuestion.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(deleteQuestion.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteQuestion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload.questionId
      );
    });
    builder.addCase(deleteQuestion.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getKkm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getKkm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.kkm = action.payload;
    });
    builder.addCase(getKkm.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(setKkm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setKkm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.msg;
    });
    builder.addCase(setKkm.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
