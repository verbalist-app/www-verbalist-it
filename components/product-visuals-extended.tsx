// Team Management Visual — Org chart statico con avatar e ruoli
export function TeamManagementVisual() {
  const roles = [
    {
      role: "Admin",
      members: [
        { name: "M.R.", label: "Marco R." },
        { name: "L.B.", label: "Laura B." },
      ],
      permissions: ["Full access", "User management", "Billing"],
    },
    {
      role: "Editor",
      members: [
        { name: "G.V.", label: "Giuseppe V." },
        { name: "A.M.", label: "Anna M." },
        { name: "P.L.", label: "Paolo L." },
      ],
      permissions: ["Create content", "Edit projects", "Export"],
    },
    {
      role: "Viewer",
      members: [
        { name: "S.C.", label: "Sara C." },
        { name: "D.F.", label: "Diego F." },
      ],
      permissions: ["View reports", "Download exports"],
    },
  ]

  return (
    <div className="h-full bg-background p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Team management</div>
        <div className="text-[12px] text-muted-foreground">
          <span className="text-foreground font-medium">7</span> members
        </div>
      </div>

      <div className="space-y-3">
        {roles.map((group) => (
          <div
            key={group.role}
            className="rounded-lg border p-3 border-border bg-muted/50"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded text-[10px] font-medium uppercase bg-muted text-muted-foreground">
                  {group.role}
                </div>
                <span className="text-[11px] text-muted-foreground">{group.members.length} members</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-2">
              {group.members.map((member) => (
                <div
                  key={member.name}
                  className="size-7 rounded-full bg-muted flex items-center justify-center text-[9px] font-medium text-muted-foreground"
                  title={member.label}
                >
                  {member.name}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1 pt-1 border-t border-border">
              {group.permissions.map((perm) => (
                <span
                  key={perm}
                  className="text-[10px] text-muted-foreground bg-muted rounded px-1.5 py-0.5"
                >
                  {perm}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Tone of Voice Visual — Mostra "Professionale" come default selezionato
export function ToneOfVoiceVisual() {
  const tones = [
    {
      name: "Professionale",
      preview: "Il materasso in memory foam garantisce un supporto ergonomico ottimale, distribuendo il peso corporeo in modo uniforme sulla superficie.",
      tags: ["Formale", "Tecnico", "Autorevole"],
      active: true,
    },
    {
      name: "Conversazionale",
      preview: "Hai mai provato a dormire su un memory foam? È come se il materasso si adattasse a te, seguendo le curve del tuo corpo. Una bella differenza.",
      tags: ["Informale", "Diretto", "Amichevole"],
      active: false,
    },
    {
      name: "Tecnico",
      preview: "Densità 50 kg/m³, risposta lenta (5-8 sec), temperatura di transizione 32°C. Strato superiore 7 cm memory foam, base 18 cm HR poliuretano.",
      tags: ["Dati", "Specifiche", "Preciso"],
      active: false,
    },
  ]

  const activeTone = tones[0]

  return (
    <div className="h-full bg-background p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Tone of voice</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-status-success" />
          <span className="text-[12px] text-muted-foreground">Generazione adattata</span>
        </div>
      </div>

      {/* Tone selector */}
      <div className="flex gap-1.5 mb-5">
        {tones.map((tone) => (
          <div
            key={tone.name}
            className={
              tone.active
                ? "flex-1 rounded-lg px-2 py-2 text-[11px] font-medium text-center bg-foreground text-background"
                : "flex-1 rounded-lg px-2 py-2 text-[11px] font-medium text-center bg-muted text-muted-foreground"
            }
          >
            {tone.name}
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="rounded-lg border border-border bg-muted/50 p-4 mb-3">
        <div className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">Anteprima output</div>
        <p className="text-[12px] text-foreground leading-relaxed">
          {activeTone.preview}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {activeTone.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-muted-foreground bg-muted rounded-full px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
