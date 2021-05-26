
describe('My Example', () => {
    it('should find text', async () => {
      await browser.url('/');

      const h2 = await $('#hi');
      await h2.waitForDisplayed({ timeout: 5000 });

      await (await expect(h2)).toHaveText('Hello');
    });
});


