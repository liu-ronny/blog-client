import Page from "../general/page";
import Content from "../general/content";

export default function PublicLayout({ children }) {
  return (
    <Page>
      <Content>{children}</Content>
    </Page>
  );
}
