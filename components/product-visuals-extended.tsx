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
    <div className="h-full bg-white p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Team management</div>
        <div className="text-[12px] text-neutral-500">
          <span className="text-neutral-900 font-medium">7</span> members
        </div>
      </div>

      <div className="space-y-3">
        {roles.map((group) => (
          <div
            key={group.role}
            className="rounded-lg border p-3 border-neutral-200 bg-neutral-50"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded text-[10px] font-medium uppercase bg-neutral-100 text-neutral-600">
                  {group.role}
                </div>
                <span className="text-[11px] text-neutral-400">{group.members.length} members</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-2">
              {group.members.map((member) => (
                <div
                  key={member.name}
                  className="size-7 rounded-full bg-neutral-200 flex items-center justify-center text-[9px] font-medium text-neutral-600"
                  title={member.label}
                >
                  {member.name}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1 pt-1 border-t border-neutral-100">
              {group.permissions.map((perm) => (
                <span
                  key={perm}
                  className="text-[10px] text-neutral-500 bg-neutral-100 rounded px-1.5 py-0.5"
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
    <div className="h-full bg-white p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Tone of voice</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[12px] text-neutral-500">Generazione adattata</span>
        </div>
      </div>

      {/* Tone selector */}
      <div className="flex gap-1.5 mb-5">
        {tones.map((tone) => (
          <div
            key={tone.name}
            className={
              tone.active
                ? "flex-1 rounded-lg px-2 py-2 text-[11px] font-medium text-center bg-neutral-900 text-white"
                : "flex-1 rounded-lg px-2 py-2 text-[11px] font-medium text-center bg-neutral-100 text-neutral-600"
            }
          >
            {tone.name}
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 mb-3">
        <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-2">Anteprima output</div>
        <p className="text-[12px] text-neutral-700 leading-relaxed">
          {activeTone.preview}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {activeTone.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-neutral-500 bg-neutral-100 rounded-full px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
