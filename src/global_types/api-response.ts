export type APIResponse<T = unknown> = {
  message: string,
  status: 200 | 201 | 404 | 401 | 400,
  pagination: {
    current_page: number,
    total: number,
  },
  data: T,
  token: string,
}