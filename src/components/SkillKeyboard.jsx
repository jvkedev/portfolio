
import gsap from "gsap";
import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { SKILLS, wrapText } from "../constants/skills";

import useMediaQuery from "../utils/useMediaQuery";
import soundEffects from "../utils/soundEffects";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.35, y: 0.33, z: 0.35 },
      position: { x: 20, y: 0, z: 40 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.17, y: 0.17, z: 0.17 },
      position: { x: 10, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.33, y: 0.33, z: 0.33 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.33, y: 0.33, z: 0.33 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
};

const SkillKeyboard = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef(null);
  const sectionRef = useRef(null);
  const [splineApp, setSplineApp] = useState();

  const [activeSection, setActiveSection] = useState("skills");
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const currentSkillRef = useRef(null);
  const animTimelineRef = useRef(null);

  const idToSkillRef = useRef(new Map());

  const keyboardStates = (section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Build the id -> skill lookup once whenever the scene (re)loads.
  useEffect(() => {
    if (!splineApp) return;
    const map = new Map();
    try {
      const allObjects = splineApp.getAllObjects();
      allObjects.forEach((obj) => {
        if (obj?.name && SKILLS[obj.name]) {
          map.set(obj.id, SKILLS[obj.name]);
        }
      });
      // Also walk up to 5 parents for objects that don't carry the skill
      // name directly (legend/keycap meshes), but only once at load time
      // instead of on every hover.
      allObjects.forEach((obj) => {
        if (map.has(obj.id)) return;
        let curr = obj;
        let depth = 0;
        while (curr && depth < 5) {
          if (curr.name && SKILLS[curr.name]) {
            map.set(obj.id, SKILLS[curr.name]);
            break;
          }
          curr = curr.parent;
          depth++;
        }
      });
    } catch (err) {}
    idToSkillRef.current = map;
  }, [splineApp]);

  // Fast, allocation-free skill resolution using the prebuilt map.
  const resolveSkillFromTarget = useCallback((target) => {
    if (!target) return null;
    const { name, id } = target;

    if (name === "body" || name === "platform" || name === "keyboard") {
      return null;
    }

    if (name && SKILLS[name]) return SKILLS[name];
    if (id && idToSkillRef.current.has(id)) return idToSkillRef.current.get(id);
    return null;
  }, []);

  const showSkillInfo = useCallback(
    (skill) => {
      if (!splineApp) return;
      try {
        splineApp.setVariable("heading", skill.label);
        splineApp.setVariable("desc", wrapText(skill.shortDescription));
      } catch (err) {}
    },
    [splineApp]
  );

  const clearSkillInfo = useCallback(() => {
    if (!splineApp) return;
    try {
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    } catch (err) {}
  }, [splineApp]);

  const handleMouseHover = useCallback(
    (e) => {
      if (!splineApp) return;
      const target = e.target;
      if (!target) return;

      const { name } = target;
      if (name === "body" || name === "platform" || name === "keyboard") {
        if (currentSkillRef.current !== null) {
          currentSkillRef.current = null;
          clearSkillInfo();
        }
        return;
      }

      const skill = resolveSkillFromTarget(target);
      if (skill && currentSkillRef.current !== skill.name) {
        currentSkillRef.current = skill.name;
        showSkillInfo(skill);
      }
    },
    [splineApp, resolveSkillFromTarget, showSkillInfo, clearSkillInfo]
  );

  const handleMouseLeave = useCallback(() => {
    if (currentSkillRef.current !== null) {
      currentSkillRef.current = null;
      clearSkillInfo();
    }
  }, [clearSkillInfo]);

  useEffect(() => {
    if (!splineApp) return;
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileLight = splineApp.findObjectByName("text-mobile");
    if (textDesktopLight) {
      textDesktopLight.visible = !isMobile;
      textDesktopLight.scale.set(0.85, 0.85, 0.85);
    }
    if (textMobileLight) {
      textMobileLight.visible = isMobile;
      textMobileLight.scale.set(0.85, 0.85, 0.85);
    }
  }, [splineApp, isMobile]);


  useEffect(() => {
    if (!splineApp) return;

    const onKeyUp = () => {
      currentSkillRef.current = null;
      clearSkillInfo();
    };

    const onKeyDown = (e) => {
      const skill = resolveSkillFromTarget(e.target);
      if (skill) {
        currentSkillRef.current = skill.name;
        showSkillInfo(skill);
        soundEffects.playClick();
      }
    };

    splineApp.addEventListener("keyUp", onKeyUp);
    splineApp.addEventListener("keyDown", onKeyDown);
    splineApp.addEventListener("mouseHover", handleMouseHover);

    return () => {
      try {
        splineApp.removeEventListener?.("keyUp", onKeyUp);
        splineApp.removeEventListener?.("keyDown", onKeyDown);
        splineApp.removeEventListener?.("mouseHover", handleMouseHover);
      } catch (err) {}
    };
  }, [splineApp, handleMouseHover, resolveSkillFromTarget, showSkillInfo, clearSkillInfo]);

  useEffect(() => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;
    gsap.set(kbd.scale, { ...keyboardStates("hero").scale });
    gsap.set(kbd.position, { ...keyboardStates("hero").position });
    setActiveSection("skills");
  }, [splineApp]);

  useEffect(() => {
    if (!splineApp || keyboardRevealed || !isInView) return;
    revealKeyCaps();
  }, [splineApp, keyboardRevealed, isInView]);

  const revealKeyCaps = () => {
    if (!splineApp || keyboardRevealed) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    setKeyboardRevealed(true);

    if (animTimelineRef.current) {
      animTimelineRef.current.kill();
    }

    const targetState = keyboardStates(activeSection);
    const tl = gsap.timeline();
    animTimelineRef.current = tl;

    tl.fromTo(
      kbd.scale,
      { x: 0.05, y: 0.05, z: 0.05 },
      {
        x: targetState.scale.x,
        y: targetState.scale.y,
        z: targetState.scale.z,
        duration: 0.85,
        ease: "power3.out",
        overwrite: true,
      }
    );

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");

    if (isMobile) {
      const mobileKeyCaps = allObjects.filter((obj) => obj.name === "keycap-mobile");
      mobileKeyCaps.forEach((keycap) => {
        keycap.visible = true;
      });
    } else {
      const desktopKeyCaps = allObjects.filter((obj) => obj.name === "keycap-desktop");
      desktopKeyCaps.forEach((keycap) => {
        keycap.visible = true;
      });
    }

    if (keycaps.length > 0) {
      keycaps.forEach((keycap) => {
        keycap.visible = true;
      });

      tl.fromTo(
        keycaps.map((k) => k.position),
        { y: 65 },
        {
          y: 25,
          duration: 0.4,
          stagger: {
            each: 0.02,
            from: "start",
          },
          ease: "back.out(1.4)",
          overwrite: true,
        },
        "-=0.4"
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: 700,
            marginTop: 34,
            textAlign: "center",
            letterSpacing: 2,
            color: "#fff",
            textShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          Skills
        </h2>
        <p style={{ textAlign: "center", color: "#aaa" }}>(hint: press a key)</p>
        <Suspense fallback={<div>Loading 3D Keyboard...</div>}>
          <Spline
            ref={splineContainer}
            onLoad={(app) => setSplineApp(app)}
            scene="/assets/skills-keyboard.spline?v=5"
          />
        </Suspense>
      </div>
      <span id="projects"></span>
    </section>
  );
};

export default SkillKeyboard;