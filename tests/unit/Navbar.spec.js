import { shallowMount } from "@vue/test-utils";

import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  let wrapper;
  let addBtn;
  beforeEach(async () => {
    wrapper = shallowMount(Navbar);
    addBtn = wrapper.find("button");
  });

  it("renders add button", () => {
    expect(addBtn.text()).toMatch("ADD A USER ＋");
  });
  it("emmit when add button clicked", async () => {
    wrapper.vm.$emit("addUser");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("addUser")).toBeTruthy();
  });
});
