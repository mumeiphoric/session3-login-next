import { swaggerSpec } from "../../lib/swagger";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function DocsPage() {
  return <SwaggerUI spec={swaggerSpec} />;
}