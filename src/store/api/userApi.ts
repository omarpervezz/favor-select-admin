import { apiSlice } from "./api";
import { UserResponse } from "@/types/user";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserResponse, string>({
      query: (token) => ({
        url: "api/admin/dashboard/users",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: UserResponse): UserResponse => {
        const transformedUsers = response.users.map((user) => ({
          ...user,
          name: `${user.firstName} ${user.lastName || ""}`.trim(),
        }));

        return {
          ...response,
          users: transformedUsers,
        };
      },
    }),

    updateCanReviewPermission: builder.mutation({
      query: ({
        userId,
        canReview,
      }: {
        userId: number;
        canReview: boolean;
      }) => ({
        url: `/api/admin/dashboard/users/${userId}/review-permission`,
        method: "PUT",
        body: { canReview },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, useUpdateCanReviewPermissionMutation } =
  userApi;
