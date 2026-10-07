# Esploso assonometrico: cinque fogli letti, due fogli scritti. Solo tratto.
import math
C,S=math.cos(math.radians(30)),math.sin(math.radians(30))
def P(x,y,z): return ((x-y)*C, (x+y)*S - z)
INK="var(--color-base-900)"; MID="var(--color-base-300)"; SOFT="var(--color-base-100)"; PAPER="var(--color-white)"; TXT="var(--color-base-500)"
out=[]
pts_all=[]
def poly(pts,fill,stroke=INK,sw=1,extra=""):
    pts_all.extend(pts)
    out.append(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x,y in pts)}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round" {extra}/>')
def line(a,b,stroke=MID,sw=1,dash=None):
    pts_all.extend([a,b])
    d=f' stroke-dasharray="{dash}"' if dash else ""
    out.append(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="round"{d}/>')
def text(p,s,anchor="start",fill=TXT,size=11):
    pts_all.append(p)
    out.append(f'<text x="{p[0]:.1f}" y="{p[1]:.1f}" text-anchor="{anchor}" fill="{fill}" font-size="{size}" letter-spacing="0.08em" class="font-mono uppercase">{s}</text>')
def sheet(x0,y0,w,d,z,t=5,top=PAPER,side=SOFT,lines=MID,nlines=5,head=True):
    x1,y1=x0+w,y0+d
    poly([P(x1,y0,z),P(x1,y1,z),P(x1,y1,z-t),P(x1,y0,z-t)],side)
    poly([P(x0,y1,z),P(x1,y1,z),P(x1,y1,z-t),P(x0,y1,z-t)],side)
    poly([P(x0,y0,z),P(x1,y0,z),P(x1,y1,z),P(x0,y1,z)],top)
    m=16
    if head: line(P(x0+m,y0+m,z),P(x0+m+w*0.45,y0+m,z),stroke=INK if top==PAPER else PAPER,sw=2)
    for i in range(nlines):
        yy=y0+m+18+i*14
        if yy>y1-m: break
        ln=(w-2*m)*(1.0 if i%3!=2 else 0.62)
        line(P(x0+m,yy,z),P(x0+m+ln,yy,z),stroke=lines)
W,D=180,124
# guide tratteggiate dell'esploso
for (x,y) in [(0,0),(W,0),(W,D),(0,D)]:
    pass
outs=[(-75,'A',INK,INK,"var(--color-base-600)"),(75,'B',PAPER,SOFT,MID)]
zs=[162+22*i for i in range(5)]
# guide: dagli angoli del foglio più basso ai due fogli in uscita
for dy,_,_,_,_ in outs:
    cx,cy=W/2,D/2+dy
    line(P(W/2,D/2,zs[0]-5),P(cx,cy,0),stroke=MID,dash="2 5")
for dy,lab,top,side,lines in outs:
    sheet(0,dy,W,D,0,t=5,top=top,side=side,lines=lines)
for i,z in enumerate(zs):
    sheet(0,0,W,D,z)
# etichette con filo
a=P(W,0,zs[-1]); b=(a[0]+46,a[1]-26)
line(a,b,stroke=INK); out.append(f'<circle cx="{a[0]:.1f}" cy="{a[1]:.1f}" r="2" fill="{INK}"/>')
text((b[0]+8,b[1]+4),"5 risultati letti")
a=P(W,D/2+75+D/2- D/2,0); a=P(W,75+D*0.2,0); b=(a[0]+40,a[1]+30)
line(a,b,stroke=INK); out.append(f'<circle cx="{a[0]:.1f}" cy="{a[1]:.1f}" r="2" fill="{INK}"/>')
text((b[0]+8,b[1]+4),"2 versioni scritte")
for i,z in enumerate(zs):
    p=P(0,D,z); text((p[0]-12,p[1]+2),str(5-i),anchor="end")
for dy,lab,top,side,lines in outs:
    p=P(0,dy+D,0); text((p[0]-12,p[1]+4),lab,anchor="end",fill=INK)
xs=[p[0] for p in pts_all]; ys=[p[1] for p in pts_all]
pad=14; minx,miny=min(xs)-pad-10,min(ys)-pad-10; w=max(xs)-minx+pad+150; h=max(ys)-miny+pad
svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{minx:.0f} {miny:.0f} {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" role="img" aria-label="Cinque risultati letti, due versioni scritte" class="w-full h-auto">'+"".join(out)+'</svg>'
open("obj.svg","w").write(svg); print(round(w),round(h),len(svg))
