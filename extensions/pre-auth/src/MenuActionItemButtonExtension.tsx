import {
  Button,
  reactExtension,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order.action.menu-item.render", () => <MenuActionItemButtonExtension />
);

function MenuActionItemButtonExtension() {
  return <Button>Add note</Button>
}