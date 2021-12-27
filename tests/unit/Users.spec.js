import { mount } from "@vue/test-utils";
import Users from "@/components/Users.vue";
import { twoUserData } from "./mock-data";

describe("Users.nav", () => {
  it("renders 2 users correctly", async () => {
    const usersWrapper = mount(Users, {
      props: {
        users: twoUserData,
      },
    });
    expect(usersWrapper.text()).toContain("Harper");
    expect(usersWrapper.text()).toContain("Parcker");
    const users = usersWrapper.findAll("div.user-container");
    expect(users.length).toBe(2);
  });
});
