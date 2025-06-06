import {
  BlockStack,
  reactExtension,
  TextBlock,
  Banner,
  useApi,
  Link,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order-status.block.render",
  () => <PromotionBanner />
);

function PromotionBanner() {
  const { i18n } = useApi();

  return (
    <Banner>
      <BlockStack inlineAlignment="center" >
        <TextBlock>
          {`🎉 You've earned 1,000 points from this order. You've been upgraded to Platinum tier. `}
          <Link>
            View rewards
          </Link>
        </TextBlock>
      </BlockStack>
    </Banner>
  );
}