import { mount } from "@vue/test-utils";
import User from "@/components/User.vue";
import { oneUserData } from "./mock-data";

describe("User.nav", () => {
  it("renders a user correctly", async () => {
    const userWrapper = mount(User, {
      props: {
        user: oneUserData[0],
      },
    });
    expect(userWrapper.text()).toContain("Porter");
  });
});
