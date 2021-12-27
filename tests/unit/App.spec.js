import { mount, flushPromises } from "@vue/test-utils";
import App from "@/App.vue";
import { oneUserData, twoUserData } from "./mock-data";
import { oneUserUrl } from "@/API";

import axios from "axios";
jest.mock("axios", () => ({
  get: jest.fn().mockImplementation(() => Promise.resolve()),
}));
const mockOneUser = { data: { results: oneUserData } };

describe("App.vue", () => {
  it("call the api with correct url", async () => {
    const appWrapper = mount(App);
    axios.get = jest.fn().mockResolvedValue(mockOneUser);
    await appWrapper.vm.getData(oneUserUrl);
    await flushPromises();
    expect(axios.get).toHaveBeenCalledWith(oneUserUrl);
  });

  it("adds one user when addUser is called", async () => {
    const appWrapper = mount(App);
    await appWrapper.setData([]);
    axios.get = jest.fn().mockResolvedValue(mockOneUser);
    await appWrapper.vm.addUser();
    expect(appWrapper.vm.users).toHaveLength(1);
  });
  it("remove one user when removeUser is called", async () => {
    const appWrapper = mount(App, {
      data() {
        return {
          users: [...twoUserData, ...oneUserData],
        };
      },
    });
    let id = oneUserData[0].login.uuid;
    await appWrapper.vm.removeUser(id);
    expect(appWrapper.vm.users).toHaveLength(2);
  });
});
