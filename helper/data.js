const poguesTitleData = "The Pogues - Fairytale of New York"
const poguesContentData = `{t:Fairytale Of New York}
{st:The Pogues}
 
[G/D]    [D]  [G/D]     
[Asus4/E]        [D]  [G/D]    
 
They've got [D]cars
Big as [A]bars
They've got [Bm]rivers of [G]gold
But the [D]wind goes right through you
It's no place for the [A]old
When you [D]first took my [Bm]hand
On a [D]cold Christmas [G]Eve
You [D]promised me
Broadway was [A]waiting for [D]me`
// const nordTitleData = "Gustaf Nordqvist - Jul, jul strålande jul"
// const nordContentData = `{title: Jul, jul, strålande jul}
// {subtitle: Nordquist}

// J[F]ul, j[Bbm6]ul, str[F]ålande j[Bbm6]ul
// Gl[F]ans över v[Fmaj]ita sk[Bb/F]o[Bbm/F]g[F]ar

// H[Bb]immelens kr[C]onor med gn[Bb]istrande lj[C]us
// Gl[Gm]immande b[A]ågar i [Gm]alla Guds h[A]us
// Ps[Bb/D]alm som är sj[F/A]ungen från t[C6]id till t[Bb]id
// [Gm/Bb]Eviga l[Dm]ängtan till lj[Gm/Bb]us och fr[A]id

// J[F]ul, j[Bbm6]ul, str[F]ålande j[Bbm6]ul
// Gl[F]ans över v[Fmaj/A]it[Bb]a sk[C9-8-7]og[F]ar

// Kom, kom, signade jul
// Sänk dina vita vingar

// Över stridernas blod och larm
// Över all suckan ur människobarm
// Över de släkten som gå till ro
// Över de ungas dagande bo

// Kom, kom, signade jul
// Sänk dina vita vingar`

const hallelujahTitleData = "Leonard Cohen - Hallelujah"
const hallelujahContentData = `{title: Hallelujah}
{subtitle: Cohen}

Now I've h[G]eard there was a sec[Em]ret chord that D[G]avid played, and it ple[Em]ased the Lord
But y[C]ou dont really c[D]are for music, do y[G]ou?  [D]
It g[G]oes like this, the f[C]ourth, the f[D]ifth, the m[Em]inor falls, the m[C]ajor lift
The b[D]affled king comp[B7]osing Hallel[Em]ujah

{c:Chorus}
{soc}
Hallel[C]ujah, Hallel[Em]ujah
Hallel[C]ujah, Hallel[G]u-[D]uj-[G]ah[D]
{eoc}

Your faith was strong but you needed proof. You saw her bathing on the roof
Her beauty and the moonlight overthrew her
She tied you to a kitchen chair, she broke your throne, and she cut your hair
And from your lips she drew the Hallelujah

Hallelujah, Hallelujah
Hallelujah, Hallelujah`
// First comest title, then comes data.
const songArr = [
	[poguesTitleData, poguesContentData],
	// [nordTitleData, nordContentData],
	[hallelujahTitleData, hallelujahContentData],
]
export { songArr }