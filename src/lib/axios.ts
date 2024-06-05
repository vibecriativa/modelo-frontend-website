import { useQuery } from "@tanstack/react-query";
import { GetBackendEndpoint } from "@/utils/get-api-endpoint";
import axios from "axios";

export const api = axios.create({
  baseURL: GetBackendEndpoint()
});