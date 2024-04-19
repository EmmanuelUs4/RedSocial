import axios from "axios";
import { USERS_URL, POSTS_URL, COMMENTS_URL } from "../services/endpoint";

export const getUsers = async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await axios.get(COMMENTS_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};