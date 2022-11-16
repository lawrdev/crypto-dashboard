import Button from "./Button";
import Card from "./Card";
import { StyledCardHeader, StyledCardTitle } from "./styled/Cards/Card.styled";
import {
  StyledCardTeam,
  StyledCardTeamAdmin,
  StyledCardTeamMember,
} from "./styled/Cards/CardTeam.styled";

interface DataProps {
  adminValue: number;
  memberValue: number;
}
const data: DataProps = {
  adminValue: 6,
  memberValue: 12,
};

function Team() {
  return (
    <Card variant="default">
      <StyledCardHeader>
        <StyledCardTitle>Team</StyledCardTitle>
      </StyledCardHeader>

      <StyledCardTeam>
        <StyledCardTeamAdmin>
          <Button icon="team_admin" color="team_admin"></Button>
          <div className="team-item">
            <h3>Total Admin</h3>
            <p>{data.adminValue}</p>
          </div>
        </StyledCardTeamAdmin>

        <StyledCardTeamMember>
          <Button icon="team_member" color="primary"></Button>
          <div className="team-item">
            <h3>Team Member</h3>
            <p>{data.memberValue}</p>
          </div>
        </StyledCardTeamMember>
      </StyledCardTeam>
    </Card>
  );
}

export default Team;
