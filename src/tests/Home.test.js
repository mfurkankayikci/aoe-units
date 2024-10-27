import { mount } from "@vue/test-utils";
import Home from "../pages/Home.vue";
import { describe, it, expect } from "vitest";

describe("Home.vue", () => {
  it("renders an image with the correct src and alt attributes", () => {
    const wrapper = mount(Home, {
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    });
    const img = wrapper.find("img");

    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toContain("home-banner.jpg");
    expect(img.attributes("alt")).toBe("Age of Empires: Background");
  });
});
