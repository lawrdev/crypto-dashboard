import { useDynamicSvgImport } from "../hooks/useDynamicSvgImport"; // hook for loading svg
import { SvgStyled } from "./styled/SvgIconLoader.styled";

interface ThisProps {
  iconName: string;
  svgProp?: React.SVGProps<SVGSVGElement>; // svg props
}

function SvgIconLoader(props: ThisProps) {
  const { iconName, svgProp } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && <SvgStyled variant="loading" />}
      {SvgIcon && (
        <SvgStyled>
          <SvgIcon {...svgProp} />
        </SvgStyled>
      )}
    </>
  );
}

export default SvgIconLoader;
