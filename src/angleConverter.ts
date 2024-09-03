import configureMeasurements from "convert-units";
//import angleUnit from "convert-units/definitions/angle"; // This import worked with version 3.0.0-beta.6
import angleUnit from "convert-units/lib/esm/definitions/angle"; // This import creates the error in version 3.0.0-beta.7
//import angleUnit from "../node_modules/convert-units/lib/cjs/definitions/angle"; // Workaround for version 3.0.0-beta.7

export class AngleConverter {
  public static convert(): void {
    const convert = configureMeasurements({
      angle: angleUnit,
    });

    convert(1).from("rad").to("deg");
  }
}
