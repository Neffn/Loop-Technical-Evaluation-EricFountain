const { test, expect } = require("@playwright/test");

const testCases = [
  {
    id: 1,
    name: "Test Case 1",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Draft project brief",
  },
  {
    id: 2,
    name: "Test Case 2",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Schedule kickoff meeting",
  },
  {
    id: 3,
    name: "Test Case 3",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Share timeline with teammates",
  },
  {
    id: 4,
    name: "Test Case 4",
    leftNav: "Work Requests",
    column: "New Requests",
    card_title: "[Example] Laptop setup for new hire",
  },
  {
    id: 5,
    name: "Test Case 5",
    leftNav: "Work Requests",
    column: "In Progress",
    card_title: "[Example] Password not working",
  },
  {
    id: 6,
    name: "Test Case 6",
    leftNav: "Work Requests",
    column: "Completed",
    card_title: "[Example] New keycard for Daniela V",
  },
];

test.describe("Asana Data-Driven Tests", () => {
  testCases.forEach((data) => {
    test("", async ({ page }) => {
      await test.step("Login to Asana", async () => {
        await page.goto("https://app.asana.com/-/login");
        await page.getByLabel("Email address").click();
        await page.getByLabel("Email address").fill(process.env.EMAIL_ADDRESS);
        await page
          .getByRole("button", { name: "Continue", exact: true })
          .click();
        await page.getByLabel("Password", { exact: true }).click();
        await page.getByLabel("Password", { exact: true }).fill("Password123");
        await page.getByRole("button", { name: "Log in" }).click();
      });

      await test.step("Navigate to the project page", async () => {
        // Navigate to the project page
      });

      await test.step("Verify the card is within the right column", async () => {
        // Verify the card is within the right column
      });
    });
  });
});
